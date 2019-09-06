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
    ROILBackgroundMediaPlayer.prototype.setMediaSource = function (src) { return cordova(this, "setMediaSource", { "otherPromise": true }, arguments); };
    ROILBackgroundMediaPlayer.prototype.play = function (currentTime, playbackSpeed) {
        if (playbackSpeed === void 0) { playbackSpeed = 1.0; }
        return cordova(this, "play", { "otherPromise": true }, arguments);
    };
    ROILBackgroundMediaPlayer.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTZCekIsNkNBQWlCOzs7O0lBUTlELGtEQUFjLGFBQUMsR0FBVztJQVMxQix3Q0FBSSxhQUFDLFdBQW1CLEVBQUUsYUFBbUI7UUFBbkIsOEJBQUEsRUFBQSxtQkFBbUI7OztJQVE3Qyx5Q0FBSzs7Ozs7O0lBekJNLHlCQUF5QjtRQURyQyxVQUFVLEVBQUU7T0FDQSx5QkFBeUI7b0NBekN0QztFQXlDK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcm9pbC1hc3NvY2lhdGUtZmlsZS10eXBlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSByb2lsQmFja2dyb3VuZE1lZGlhUGxheWVyOiBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5yb2lsQmFja2dyb3VuZE1lZGlhUGxheWVyLnNldE1lZGlhU291cmNlKHNyYyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcicsXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBzcmMge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgc291cmNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIHNldE1lZGlhU291cmNlKHNyYzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY3VycmVudFRpbWUge251bWJlcn0gQ3VycmVudCBwb3NpdGlvbiBpbiBwbGF5ZWQgc291cmNlXG4gICAqIEBwYXJhbSBwbGF5YmFja1NwZWVkIHtudW1iZXJ9IFBsYXliYWNrIHNwZWVkLCBkZWZhdWx0cyB0byAxLjBcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgcGxheShjdXJyZW50VGltZTogbnVtYmVyLCBwbGF5YmFja1NwZWVkID0gMS4wKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBDdXJyZW50IHBvc2l0aW9uIGluIHBsYXllZCBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgcGF1c2UoKTogUHJvbWlzZTxudW1iZXI+IHsgcmV0dXJuOyB9XG59XG4iXX0=