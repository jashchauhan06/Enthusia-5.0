<script lang="ts" context="module">
	const material: {
		color: string | Color;
		roughness: { min: number; max: number; value: number };
		metalness: { min: number; max: number; value: number };
		wireframe: boolean;
	} = {
		color: '#b0b0b0',
		roughness: {
			min: 0,
			value: 0.4,
			max: 1
		},
		metalness: {
			min: 0,
			value: 1,
			max: 1
		},
		wireframe: false
	};

	const lights = {
		light1: {
			step: 1,
			value: [-200, 150, 50] as const
		},
		light2: {
			step: 1,
			value: [300, -100, 150] as const
		},
		light1Intensity: {
			min: 0,
			value: 1,
			max: 1
		},
		light2Intensity: {
			min: 0,
			value: 1,
			max: 1
		},
		lightsColor: '#ff98a2',
		ambientColor: '#0E0E0E'
	};

	// const model = {
	// 	custom: false,
	// 	scale: {
	// 		min: 0,
	// 		value: 0.05,
	// 		max: 0.06,
	// 		step: 0.001
	// 	},
	// 	position: [0, 0, 0],
	// 	rotation: { step: 1, min: -360, value: [0, 0, 0], max: 360 }
	// };

	// Helper type to create a union of all possible key-value pairs
	type MaterialEntry = { [K in keyof typeof material]: [K, (typeof material)[K]] }[keyof typeof material];
	type LightsEntry = { [K in keyof typeof lights]: [K, (typeof lights)[K]] }[keyof typeof lights];

	function updateMaterial(props: MaterialEntry[]) {
		for (let [key, val] of props) {
			// @ts-ignore
			material[key] = val;
		}
	}

	function updateLights(props: LightsEntry[]) {
		for (let [key, val] of props) {
			// @ts-ignore
			lights[key] = val;
		}
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import {
		AmbientLight,
		Color,
		DirectionalLight,
		Euler,
		Group,
		MathUtils,
		Scene,
		Vector3
	} from 'three';

	import type Renderer from './renderer';

	import { useScroll } from '$lib/lifecycle-functions/useScroll';
	import { useMediaQuery } from '$lib/lifecycle-functions/useMediaQuery';
	import { mapRange } from '$lib/utils/maths';
	import { thresholdsStore } from '$lib/stores/thresholds';
	import { steps } from './steps';
	import { loadGLB } from './loadGLB';

	const isMobile = useMediaQuery('(max-width: 800px)');

	export let renderer: Renderer;

	let type = 1;
	let updateML = false;
	const dummyArr = [0, 0, 0];
	const speed = 1;
	const rotationIntensity = 1;
	const floatIntensity = 1;
	const floatingRange = [-0.1, 0.1];

	let parentRef: Group;
	let groupRef: Group;
	let offset = Math.random() * 10000;
	let rocket: Scene;

	const updateArmMaterial = (arm: Scene) => {
		if (arm) {
			const color = new Color(material.color);

			arm.traverse((node: any) => {
				if (node.isMesh) {
					node.material.color = color;
					node.material.roughness = material.roughness.value;
					node.material.metalness = material.metalness.value;
					node.material.wireframe = material.wireframe;
					node.material.needsUpdate = true;
				}
			});
		}
	};

	$: if (updateML) {
		if (rocket) {
			updateArmMaterial(rocket);
		}
		updateML = false;
	}

	$: thresholds = Object.values($thresholdsStore).sort((a, b) => a - b);

	$: if (thresholds?.length) {
		rocket?.scale?.set(1, 1, 1);
		onScroll(0);
	}

	onMount(async () => {
		const gltf: any = await loadGLB('/models/Space_Station.glb');

		rocket = gltf.scene.children[0];

		rocket.scale.set(1, 1, 1);

		updateArmMaterial(rocket);

		const ambientLight1 = new AmbientLight(new Color(lights.ambientColor));

		const groupLight1 = new Group();
		groupLight1.position.set(...lights.light1.value);
		const directionalLight1 = new DirectionalLight(
			new Color(lights.lightsColor),
			lights.light1Intensity.value
		);

		const groupLight2 = new Group();
		groupLight2.position.set(...lights.light2.value);
		const directionalLight2 = new DirectionalLight(
			new Color(lights.lightsColor),
			lights.light2Intensity.value
		);

		groupLight1.add(directionalLight1);
		groupLight2.add(directionalLight2);

		parentRef = new Group();
		groupRef = new Group();

		groupRef.add(rocket);
		parentRef.add(groupRef);

		renderer?.scene?.add(ambientLight1);
		renderer?.scene?.add(groupLight1);
		renderer?.scene?.add(groupLight2);
		renderer?.scene?.add(parentRef);

		const unsubscribe = renderer.onFrame((state) => {
			if (!parentRef) return;

			const t = offset + state.clock.getElapsedTime();
			parentRef.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity;
			parentRef.rotation.y = (Math.sin((t / 4) * speed) / 8) * rotationIntensity;
			parentRef.rotation.z = (Math.sin((t / 4) * speed) / 20) * rotationIntensity;

			let yPosition = Math.sin((t / 4) * speed) / 10;
			yPosition = MathUtils.mapLinear(
				yPosition,
				-0.1,
				0.1,
				floatingRange?.[0] ?? -0.1,
				floatingRange?.[1] ?? 0.1
			);

			parentRef.position.y = yPosition * floatIntensity;
		});

		return () => {
			unsubscribe && unsubscribe();
		};
	});

	function onScroll(scroll: number) {
		if (!groupRef) return;

		const current = thresholds.findIndex((v) => scroll < v) - 1;

		const start = thresholds[current];
		const end = thresholds[current + 1];
		const progress = mapRange(start, end, scroll, 0, 1);

		const from = steps[current];
		const to = steps[current + 1];

		groupRef.visible = from?.type === to?.type;

		if (!to) return;

		const _scale = mapRange(0, 1, progress, from.scale, to.scale);
		const _position = new Vector3(
			renderer.viewport.width * mapRange(0, 1, progress, from.position[0], to.position[0]),
			renderer.viewport.height * mapRange(0, 1, progress, from.position[1], to.position[1]),
			0
		);
		const _rotation = new Euler().fromArray(
			dummyArr.map((_, i) => mapRange(0, 1, progress, from.rotation[i], to.rotation[i])) as [
				number,
				number,
				number
			]
		);

		groupRef.scale.setScalar(renderer.viewport.height * _scale * ($isMobile ? 0.7 : 1));
		groupRef.position.copy(_position);
		groupRef.rotation.copy(_rotation);

		type = to.type;
	}

	useScroll(({ scroll }) => {
		onScroll(scroll);

		if (scroll < $thresholdsStore['light-start']) {
			if (lights.lightsColor === '#ff98a2') return;

			updateLights([
				['light1Intensity', { min: 0, value: 0.35, max: 1 }],
				['light2Intensity', { min: 0, value: 0.15, max: 1 }],
				['lightsColor', '#ff98a2'],
				['ambientColor', '#ff98a2']
			]);

			updateMaterial([
				['color', '#b0b0b0'],
				[
					'roughness',
					{
						min: 0,
						value: 0.4,
						max: 1
					}
				],
				[
					'metalness',
					{
						min: 0,
						value: 1,
						max: 1
					}
				]
			]);

			updateML = true;
		} else {
			if (lights.lightsColor === '#efefef') return;

			updateLights([
				['light1Intensity', { min: 0, value: 1, max: 1 }],
				['light2Intensity', { min: 0, value: 1, max: 1 }],
				['lightsColor', '#efefef'],
				['ambientColor', '#b0b0b0']
			]);

			updateMaterial([
				['color', '#efefef'],
				[
					'roughness',
					{
						min: 0,
						value: 0.4,
						max: 1
					}
				],
				[
					'metalness',
					{
						min: 0,
						value: 0.6,
						max: 1
					}
				]
			]);

			updateML = true;
		}
	});
</script>
