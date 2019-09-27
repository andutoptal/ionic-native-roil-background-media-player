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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var PlayerState;
(function (PlayerState) {
    PlayerState["PLAYING"] = "playing";
    PlayerState["PAUSED"] = "paused";
})(PlayerState || (PlayerState = {}));
var ROILBackgroundMediaPlayerOriginal = /** @class */ (function (_super) {
    __extends(ROILBackgroundMediaPlayerOriginal, _super);
    function ROILBackgroundMediaPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ROILBackgroundMediaPlayerOriginal.prototype.setMediaSource = function (src, title, imageUrl) {
        if (title === void 0) { title = null; }
        if (imageUrl === void 0) { imageUrl = null; }
        return cordova(this, "setMediaSource", { "otherPromise": true }, arguments);
    };
    ROILBackgroundMediaPlayerOriginal.prototype.play = function (currentTime, playbackSpeed) {
        if (playbackSpeed === void 0) { playbackSpeed = 1.0; }
        return cordova(this, "play", { "otherPromise": true }, arguments);
    };
    ROILBackgroundMediaPlayerOriginal.prototype.pause = function () { return cordova(this, "pause", { "otherPromise": true }, arguments); };
    ROILBackgroundMediaPlayerOriginal.pluginName = "ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayerOriginal.plugin = "cordova-plugin-roil-background-media-player";
    ROILBackgroundMediaPlayerOriginal.pluginRef = "cordova.plugins.ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayerOriginal.repo = "";
    ROILBackgroundMediaPlayerOriginal.platforms = ["Android", "iOS"];
    return ROILBackgroundMediaPlayerOriginal;
}(IonicNativePlugin));
var ROILBackgroundMediaPlayer = new ROILBackgroundMediaPlayerOriginal();
export { ROILBackgroundMediaPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQixnQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsV0FBVyxLQUFYLFdBQVcsUUFHdEI7O0lBa0M4Qyw2Q0FBaUI7Ozs7SUFVOUQsa0RBQWMsYUFBQyxHQUFXLEVBQUUsS0FBb0IsRUFBRSxRQUF1QjtRQUE3QyxzQkFBQSxFQUFBLFlBQW9CO1FBQUUseUJBQUEsRUFBQSxlQUF1Qjs7O0lBU3pFLHdDQUFJLGFBQUMsV0FBbUIsRUFBRSxhQUFtQjtRQUFuQiw4QkFBQSxFQUFBLG1CQUFtQjs7O0lBUTdDLHlDQUFLOzs7Ozs7b0NBOUVQO0VBbUQrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGVudW0gUGxheWVyU3RhdGUge1xuICBQTEFZSU5HID0gJ3BsYXlpbmcnLFxuICBQQVVTRUQgPSAncGF1c2VkJ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXllclBvc2l0aW9uQW5kU3RhdGUge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBzdGF0ZTogUGxheWVyU3RhdGU7XG59XG5cbi8qKlxuICogQG5hbWUgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcm9pbC1hc3NvY2lhdGUtZmlsZS10eXBlJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSByb2lsQmFja2dyb3VuZE1lZGlhUGxheWVyOiBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5yb2lsQmFja2dyb3VuZE1lZGlhUGxheWVyLnNldE1lZGlhU291cmNlKHNyYyk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcicsXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGU9bnVsbF0gU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaW1hZ2VVcmw9bnVsbF0gU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgc291cmNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIHNldE1lZGlhU291cmNlKHNyYzogc3RyaW5nLCB0aXRsZTogc3RyaW5nID0gbnVsbCwgaW1hZ2VVcmw6IHN0cmluZyA9IG51bGwpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50VGltZSBDdXJyZW50IHBvc2l0aW9uIGluIHBsYXllZCBzb3VyY2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwbGF5YmFja1NwZWVkPTEuMF0gUGxheWJhY2sgc3BlZWQsIGRlZmF1bHRzIHRvIDEuMFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZVxuICB9KVxuICBwbGF5KGN1cnJlbnRUaW1lOiBudW1iZXIsIHBsYXliYWNrU3BlZWQgPSAxLjApOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEN1cnJlbnQgcG9zaXRpb24gaW4gcGxheWVkIHNvdXJjZVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG90aGVyUHJvbWlzZTogdHJ1ZVxuICB9KVxuICBwYXVzZSgpOiBQcm9taXNlPFBsYXllclBvc2l0aW9uQW5kU3RhdGU+IHsgcmV0dXJuOyB9XG59XG4iXX0=