function stage(name, cb) {
    setTimeout(() => { console.log(name); cb(); }, 1000);
}

stage("design", () => {
    stage("build", () => {
        stage("test", () => {
            stage("deploy", () => {
                stage("celebrate", () => { });
            });
        });
    });
});

function stageAsync(name) {
    return new Promise(res => setTimeout(() => { console.log(name); res(); }, 1000));
}

async function runPipeline() {
    await stageAsync("design");
    await stageAsync("build");
    await stageAsync("test");
    await stageAsync("deploy");
    await stageAsync("celebrate");
}

runPipeline();