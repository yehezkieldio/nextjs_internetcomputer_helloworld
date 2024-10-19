import { parseArgs } from "util";

import { $ } from "bun";

const { values } = parseArgs({
    args: Bun.argv,
    options: {
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

if (values.generate) {
    await $`dfx generate backend`;
    await $`bun run scripts/update-env.ts`;
}

if (values.create) {
    await $`dfx canister create backend`;
}

if (values.deploy) {
    await $`dfx deploy`;
}

export {};
