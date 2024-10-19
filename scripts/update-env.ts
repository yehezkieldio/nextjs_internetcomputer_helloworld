const ENV_FILE_PATH = ".env";
const DECLARATIONS_FILE_PATH = "./src/icp/index.js";

const GENERATED = "CANISTER_ID_BACKEND";
const EXPECTED_GENERATED = "NEXT_PUBLIC_CANISTER_ID_BACKEND";

async function updateFile(filePath: string, oldString: string, newString: string): Promise<void> {
    const fileContent = await Bun.file(filePath).text();

    if (!fileContent.includes(newString)) {
        const updatedContent = fileContent.replace(oldString, newString);
        await Bun.write(filePath, updatedContent);
        console.log(`Updating ${filePath} with ${newString}`);
    } else {
        console.log(`No need to update ${filePath}`);
    }
}

await updateFile(ENV_FILE_PATH, GENERATED, EXPECTED_GENERATED);
await updateFile(DECLARATIONS_FILE_PATH, GENERATED, EXPECTED_GENERATED);

export {};