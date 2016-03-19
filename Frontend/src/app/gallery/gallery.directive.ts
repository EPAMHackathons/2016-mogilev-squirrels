export class Gallery {
    public controller = 'GalleryController';
    public controllerAs = 'ctrl';
    public bindToController = true;

    public templateUrl = 'gallery/gallery.tpl.html';

    public static create() {
        var gallery = () => new Gallery();
        gallery.$inject = [];
        return gallery;
    }
}