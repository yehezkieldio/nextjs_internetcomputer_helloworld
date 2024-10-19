"use client";

import { useState } from "react";

import { createBackendActor } from "#/lib/actor";

const actor = createBackendActor();

export default function HelloWorld() {
    const [helloWorld, setHelloWorld] = useState<string>("");

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const name = "elizielx";
        actor.greet(name).then((greeting) => {
            setHelloWorld(greeting);
        });

        return false;
    }

    return (
        <div className="flex flex-row p-4">
            <span>{helloWorld ? <span>{helloWorld}</span> : <span>No greeting yet</span>}</span>
            <button type="button" onClick={handleSubmit} className="ml-4 border-white">
                Greet me
            </button>
        </div>
    );
}
