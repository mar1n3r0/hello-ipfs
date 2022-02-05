# hello-ipfs
Running a self-contained go-app wasm binary on IPFS

# requirements
https://docs.ipfs.io/install/ipfs-desktop/

# instructions

This is a static build of the https://github.com/maxence-charriere/go-app package where wasm_exec.js, app.css and app.js are inlined in the index.html file.
The app-worker.js is a static copy of a working version.

You can test it live once you have ipfs-desktop running by visiting the following URL:
http://bafybeiftrw3rvdejmdijmupouitb2b4sepzsylwtqdmcqk6xhi376m5ree.ipfs.localhost:8080/
