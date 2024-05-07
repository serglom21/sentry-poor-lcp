Sentry.init({ dsn: 'https://aaac9e5002a43a917fb00a1c9f0921ab@o4504533099937792.ingest.us.sentry.io/4506156881936384', tracesSampleRate: 1.0 });

// Simulate heavy JS computation
for (let i = 0; i < 1000000; i++) {
    console.log(i);
}