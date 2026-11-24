// sim-matrix build-oom: a build step that allocates until it runs out of memory. Run with a small
// --max-old-space-size (apps/api build script), so V8 aborts with "JavaScript heap out of memory"
// after ~50 MB instead of taking the dind's memory with it.
const hog = [];
for (;;) hog.push(new Array(100000).fill(Math.random()));
