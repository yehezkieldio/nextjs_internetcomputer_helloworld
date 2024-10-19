import { canisterId, createActor } from "#/icp";

export function createBackendActor() {
    return createActor(canisterId, {
        agentOptions: {
            host: process.env.NEXT_PUBLIC_IC_HOST,
        },
    });
}
