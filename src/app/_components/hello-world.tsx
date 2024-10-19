"use client";

import { useState } from "react";

import { Button } from "#/components/ui/button";
import { Card, CardContent } from "#/components/ui/card";
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
        <Card>
            <CardContent className="mb-12 mt-12 flex flex-col items-center justify-center gap-4 pt-6">
                <span className="text-center">
                    {helloWorld ? <span>{helloWorld}</span> : <span>No greeting yet</span>}
                </span>
                <Button type="button" onClick={handleSubmit}>
                    Greet me
                </Button>
            </CardContent>
        </Card>
    );
}
