import { IonicNativePlugin } from '@ionic-native/core';
export declare enum PlayerState {
    PLAYING = "playing",
    PAUSED = "paused"
}
export interface PlayerPositionAndState {
    position: number;
    state: PlayerState;
}
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
export declare class ROILBackgroundMediaPlayerOriginal extends IonicNativePlugin {
    /**
     * @param {string} src String representing the media source
     * @param {string} [title=null] String representing the media source
     * @param {string} [imageUrl=null] String representing the media source
     */
    setMediaSource(src: string, title?: string, imageUrl?: string): Promise<void>;
    /**
     * @param {number} currentTime Current position in played source
     * @param {number} [playbackSpeed=1.0] Playback speed, defaults to 1.0
     */
    play(currentTime: number, playbackSpeed?: number): Promise<void>;
    /**
     * @returns {number} Current position in played source
     */
    pause(): Promise<PlayerPositionAndState>;
}

export declare const ROILBackgroundMediaPlayer: ROILBackgroundMediaPlayerOriginal;