declare module '*.glsl' {
    const value: string;
    export default value;
}

declare module 'three/addons/loaders/GLTFLoader.js' {
    import { Loader, LoadingManager, Group } from 'three';
    import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

    export class GLTFLoader extends Loader {
        constructor(manager?: LoadingManager);
        load(
            url: string,
            onLoad: (gltf: any) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: Error) => void
        ): void;
        parse(
            data: ArrayBuffer | string,
            path: string,
            onLoad: (gltf: any) => void,
            onError?: (event: Error) => void
        ): void;
        setDRACOLoader(dracoLoader: DRACOLoader): this;
    }
}

declare module 'three/addons/loaders/DRACOLoader.js' {
    import { Loader, LoadingManager } from 'three';
    export class DRACOLoader extends Loader {
        constructor(manager?: LoadingManager);
        setDecoderPath(path: string): this;
        dispose(): void;
    }
}

declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        'on:intersecting'?: (event: CustomEvent) => void;
    }
}
