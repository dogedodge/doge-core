/**
 * manage image resources
 */
class Stomach {
    private promMap: { [x: string]: Promise<HTMLImageElement> } = {};

    async feed(src: string) {
        var promise = this.promMap[src];
        // load for the src before
        if (promise) {
            return await promise;
        }

        promise = new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.onerror = function (e) {
                reject(e);
            };
            image.src = src;
        });
        this.promMap[src] = promise;
        return await promise;
    }
}

export const stomach = new Stomach();