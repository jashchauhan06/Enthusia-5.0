import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath('/examples/jsm/libs/draco/');
loader.setDRACOLoader(dracoLoader);

export function loadGLB(path: string) {
	return new Promise((res, rej) => {
		loader.load(
			path,
			function (gltf: any) {
				res(gltf);
			},
			function (xhr: { loaded: number; total: number }) {
				// console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
			},
			function (error: Error) {
				console.log('An error happened');
			}
		);
	});
}
