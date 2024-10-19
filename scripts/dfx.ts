import { parseArgs } from "util";

import { $ } from "bun";

const { values } = parseArgs({
    args: Bun.argv,
    options: {
        start: {
            type: "boolean",
        },
        generate: {
            type: "boolean",
        },
        create: {
            type: "boolean",
        },
        deploy: {
            type: "boolean",
        },
    },
    strict: true,
    allowPositionals: true,
});

/* -------------------------------------------------------------------------- */

if (values.start) {
    await $`dfx start --clean`;
}

if (values.generate) {
    await $`dfx generate backend`;
    await $`bun run update-env`;
}

if (values.create) {
    await $`dfx canister create backend`;
}

if (values.deploy) {
    await $`dfx canister install backend`;
    await $`bun run update-env`;
}

export {};
