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
export var PlayerState;
(function (PlayerState) {
    PlayerState["PLAYING"] = "playing";
    PlayerState["PAUSED"] = "paused";
})(PlayerState || (PlayerState = {}));
var ROILBackgroundMediaPlayer = /** @class */ (function (_super) {
    __extends(ROILBackgroundMediaPlayer, _super);
    function ROILBackgroundMediaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ROILBackgroundMediaPlayer.prototype.setMediaSource = function (src, title, imageUrl) {
        if (title === void 0) { title = null; }
        if (imageUrl === void 0) { imageUrl = null; }
        return cordova(this, "setMediaSource", { "otherPromise": true }, arguments);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBRXhFLE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsa0NBQW1CLENBQUE7SUFDbkIsZ0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCOztJQWtDOEMsNkNBQWlCOzs7O0lBVTlELGtEQUFjLGFBQUMsR0FBVyxFQUFFLEtBQW9CLEVBQUUsUUFBdUI7UUFBN0Msc0JBQUEsRUFBQSxZQUFvQjtRQUFFLHlCQUFBLEVBQUEsZUFBdUI7OztJQVN6RSx3Q0FBSSxhQUFDLFdBQW1CLEVBQUUsYUFBbUI7UUFBbkIsOEJBQUEsRUFBQSxtQkFBbUI7OztJQVE3Qyx5Q0FBSzs7Ozs7O0lBM0JNLHlCQUF5QjtRQURyQyxVQUFVLEVBQUU7T0FDQSx5QkFBeUI7b0NBbkR0QztFQW1EK0MsaUJBQWlCO1NBQW5ELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFBsYXllclN0YXRlIHtcbiAgUExBWUlORyA9ICdwbGF5aW5nJyxcbiAgUEFVU0VEID0gJ3BhdXNlZCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5ZXJQb3NpdGlvbkFuZFN0YXRlIHtcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgc3RhdGU6IFBsYXllclN0YXRlO1xufVxuXG4vKipcbiAqIEBuYW1lIFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvaWwtYXNzb2NpYXRlLWZpbGUtdHlwZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9pbEJhY2tncm91bmRNZWRpYVBsYXllcjogUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucm9pbEJhY2tncm91bmRNZWRpYVBsYXllci5zZXRNZWRpYVNvdXJjZShzcmMpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1JPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yb2lsLWJhY2tncm91bmQtbWVkaWEtcGxheWVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXInLFxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlPW51bGxdIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2ltYWdlVXJsPW51bGxdIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHNvdXJjZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZVxuICB9KVxuICBzZXRNZWRpYVNvdXJjZShzcmM6IHN0cmluZywgdGl0bGU6IHN0cmluZyA9IG51bGwsIGltYWdlVXJsOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudFRpbWUgQ3VycmVudCBwb3NpdGlvbiBpbiBwbGF5ZWQgc291cmNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGxheWJhY2tTcGVlZD0xLjBdIFBsYXliYWNrIHNwZWVkLCBkZWZhdWx0cyB0byAxLjBcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgcGxheShjdXJyZW50VGltZTogbnVtYmVyLCBwbGF5YmFja1NwZWVkID0gMS4wKTogUHJvbWlzZTx2b2lkPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBDdXJyZW50IHBvc2l0aW9uIGluIHBsYXllZCBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgcGF1c2UoKTogUHJvbWlzZTxQbGF5ZXJQb3NpdGlvbkFuZFN0YXRlPiB7IHJldHVybjsgfVxufVxuIl19