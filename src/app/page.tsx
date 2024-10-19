import HelloWorld from "#/app/_components/hello-world";

export default function Home() {
    return (
        <div className="max-w-sm p-8">
            <h1 className="pb-4">Internet Computer with Next.js</h1>
            <HelloWorld />
        </div>
    );
}
