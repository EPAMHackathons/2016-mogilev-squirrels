export class GalleryController {
    public static $inject = ['galleryService'];

    public images = [];

    constructor(private galleryService) {
    }

    public init() {
        this.galleryService.getData().then((data)=> {
            this.images = data.data;
        });
    }
}