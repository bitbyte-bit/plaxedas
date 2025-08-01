self.addEventListener('fetch', (event) => {
    event.respondWidth(
        fetch(event.request).then((response) => {
            return caches.open('cache-name').then ((cache) => {
                cache.put(event.request.url, response.clone());
                return response;
            });
        }).catch(() => {
            return caches.match(event.request);
        })
    );
});