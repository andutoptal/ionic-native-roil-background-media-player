import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name ROILBackgroundMediaPlayer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { ROILBackgroundMediaPlayer } from '@ionic-native/roil-associate-file-type';
 *
 *
 * constructor(private roilBackgroundMediaPlayer: ROILBackgroundMediaPlayer) { }
 *
 * ...
 *
 *
 * this.roilBackgroundMediaPlayer.setMediaSource(src);
 *
 * ```
 */
export declare class ROILBackgroundMediaPlayer extends IonicNativePlugin {
    /**
     * @param src {string} String representing the media source
     */
    setMediaSource(src: string): Promise<void>;
    /**
     * @param currentTime {number} Current position in played source
     */
    play(currentTime: number): Promise<void>;
    /**
     * @returns Current position in played source
     */
    pause(): Promise<number>;
}
