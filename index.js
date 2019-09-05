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
    ROILBackgroundMediaPlayerOriginal.prototype.setMediaSource = function (src) { return cordova(this, "setMediaSource", {}, arguments); };
    ROILBackgroundMediaPlayerOriginal.prototype.play = function (currentTime) { return cordova(this, "play", {}, arguments); };
    ROILBackgroundMediaPlayerOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    ROILBackgroundMediaPlayerOriginal.pluginName = "ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayerOriginal.plugin = "cordova-plugin-roil-background-media-player";
    ROILBackgroundMediaPlayerOriginal.pluginRef = "cordova.plugins.ROILBackgroundMediaPlayer";
    ROILBackgroundMediaPlayerOriginal.repo = "";
    ROILBackgroundMediaPlayerOriginal.platforms = ["Android", "iOS"];
    return ROILBackgroundMediaPlayerOriginal;
}(IonicNativePlugin));
var ROILBackgroundMediaPlayer = new ROILBackgroundMediaPlayerOriginal();
export { ROILBackgroundMediaPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3JvaWwtYmFja2dyb3VuZC1tZWRpYS1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBNkJ6Qiw2Q0FBaUI7Ozs7SUFNOUQsa0RBQWMsYUFBQyxHQUFXO0lBTTFCLHdDQUFJLGFBQUMsV0FBbUI7SUFNeEIseUNBQUs7Ozs7OztvQ0EzRFA7RUF5QytDLGlCQUFpQjtTQUFuRCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3JvaWwtYXNzb2NpYXRlLWZpbGUtdHlwZSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9pbEJhY2tncm91bmRNZWRpYVBsYXllcjogUk9JTEJhY2tncm91bmRNZWRpYVBsYXllcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMucm9pbEJhY2tncm91bmRNZWRpYVBsYXllci5zZXRNZWRpYVNvdXJjZShzcmMpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1JPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yb2lsLWJhY2tncm91bmQtbWVkaWEtcGxheWVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlJPSUxCYWNrZ3JvdW5kTWVkaWFQbGF5ZXInLFxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBST0lMQmFja2dyb3VuZE1lZGlhUGxheWVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1lZGlhIHNvdXJjZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRNZWRpYVNvdXJjZShzcmM6IHN0cmluZyk6IFByb21pc2U8dm9pZD4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQHBhcmFtIGN1cnJlbnRUaW1lIHtudW1iZXJ9IEN1cnJlbnQgcG9zaXRpb24gaW4gcGxheWVkIHNvdXJjZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwbGF5KGN1cnJlbnRUaW1lOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIEN1cnJlbnQgcG9zaXRpb24gaW4gcGxheWVkIHNvdXJjZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwYXVzZSgpOiBQcm9taXNlPG51bWJlcj4geyByZXR1cm47IH1cbn1cbiJdfQ==