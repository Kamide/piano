import './piano/index';

if (navigator.serviceWorker) {
	// Prevent Parcel from resolving this URL.
	const url = new (class extends URL { })('./service-worker.js', import.meta.url);

	// Prevent service worker from registering during development.
	if (url.protocol !== 'file:') {
		navigator.serviceWorker.register(url);
	}
}
