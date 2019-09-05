var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ROILBackgroundMediaPlayer = /** @class */ (function (_super) {
    __extends(ROILBackgroundMediaPlayer, _super);
    function ROILBackgroundMediaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ROILBackgroundMediaPlayer.prototype.setMediaSource = function (src) { return cordova(this, "setMediaSource", {}, arguments); };
    ROILBackgroundMediaPlayer.prototype.play = function (currentTime) { return cordova(this, "play", {}, arguments); };
    ROILBackgroundMediaPlayer.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    ROILBackgroundMediaPlayer.pluginName = "ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayer.plugin = "cordova-plugin-roil-background-media-player";
    ROILBackgroundMediaPlayer.pluginRef = "cordova.plugins.ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayer.repo = "";
    ROILBackgroundMediaPlayer.platforms = ["Android", "iOS"];
    ROILBackgroundMediaPlayer = __decorate([
        Injectable()
    ], ROILBackgroundMediaPlayer);
    return ROILBackgroundMediaPlayer;
}(IonicNativePlugin));
export { ROILBackgroundMediaPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCekIsNkNBQWlCOzs7O0lBTTlELGtEQUFjLGFBQUMsR0FBVztJQU0xQix3Q0FBSSxhQUFDLFdBQW1CO0lBTXhCLHlDQUFLOzs7Ozs7SUFsQk0seUJBQXlCO1FBRHJDLFVBQVUsRUFBRTtPQUNBLHlCQUF5QjtvQ0F6Q3RDO0VBeUMrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9yb2lsLWFzc29jaWF0ZS1maWxlLXR5cGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvaWxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXI6IFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnJvaWxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIuc2V0TWVkaWFTb3VyY2Uoc3JjKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcm9pbC1iYWNrZ3JvdW5kLW1lZGlhLXBsYXllcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyJyxcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQHBhcmFtIHNyYyB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZWRpYSBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0TWVkaWFTb3VyY2Uoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjdXJyZW50VGltZSB7bnVtYmVyfSBDdXJyZW50IHBvc2l0aW9uIGluIHBsYXllZCBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGxheShjdXJyZW50VGltZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBDdXJyZW50IHBvc2l0aW9uIGluIHBsYXllZCBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2UoKTogUHJvbWlzZTxudW1iZXI+IHsgcmV0dXJuOyB9XG59XG4iXX0=