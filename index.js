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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJ6Qiw2Q0FBaUI7Ozs7SUFVOUQsa0RBQWMsYUFBQyxHQUFXLEVBQUUsS0FBb0IsRUFBRSxRQUF1QjtRQUE3QyxzQkFBQSxFQUFBLFlBQW9CO1FBQUUseUJBQUEsRUFBQSxlQUF1Qjs7O0lBU3pFLHdDQUFJLGFBQUMsV0FBbUIsRUFBRSxhQUFtQjtRQUFuQiw4QkFBQSxFQUFBLG1CQUFtQjs7O0lBUTdDLHlDQUFLOzs7Ozs7b0NBcEVQO0VBeUMrQyxpQkFBaUI7U0FBbkQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9yb2lsLWFzc29jaWF0ZS1maWxlLXR5cGUnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvaWxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXI6IFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnJvaWxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIuc2V0TWVkaWFTb3VyY2Uoc3JjKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcm9pbC1iYWNrZ3JvdW5kLW1lZGlhLXBsYXllcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5ST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyJyxcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUk9JTEJhY2tncm91bmRNZWRpYVBsYXllciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZWRpYSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZT1udWxsXSBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZWRpYSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtpbWFnZVVybD1udWxsXSBTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtZWRpYSBzb3VyY2VcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvdGhlclByb21pc2U6IHRydWVcbiAgfSlcbiAgc2V0TWVkaWFTb3VyY2Uoc3JjOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSBudWxsLCBpbWFnZVVybDogc3RyaW5nID0gbnVsbCk6IFByb21pc2U8dm9pZD4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRUaW1lIEN1cnJlbnQgcG9zaXRpb24gaW4gcGxheWVkIHNvdXJjZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BsYXliYWNrU3BlZWQ9MS4wXSBQbGF5YmFjayBzcGVlZCwgZGVmYXVsdHMgdG8gMS4wXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIHBsYXkoY3VycmVudFRpbWU6IG51bWJlciwgcGxheWJhY2tTcGVlZCA9IDEuMCk6IFByb21pc2U8dm9pZD4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQHJldHVybnMge251bWJlcn0gQ3VycmVudCBwb3NpdGlvbiBpbiBwbGF5ZWQgc291cmNlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb3RoZXJQcm9taXNlOiB0cnVlXG4gIH0pXG4gIHBhdXNlKCk6IFByb21pc2U8bnVtYmVyPiB7IHJldHVybjsgfVxufVxuIl19