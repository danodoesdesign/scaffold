<template>
    <div class="container flex flex-col gap-10 px-10 mx-auto mb-40">
        <h2 class="mt-10 text-3xl font-bold">Using Notion to populate inputs</h2>
        <p>This list within the below <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://tailwindui.com/components/application-ui/elements/dropdowns" target="_blank">TailwindUI
                Dropdown</a> is
            being imported from <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://danohara.notion.site/9d30f1bf98004106856e741e2139a81d?v=c7c45e6a745848e29ff76e8a90a81228"
                target="_blank">this
                Notion database</a> via the <i class="px-2 py-1 rounded-md text-rose-600 bg-slate-100">npm run
                notion</i> script.
        </p>
        <DropdownExample class="w-fit" />
        <hr />
        <h2 class="mt-10 text-3xl font-bold">Using Notion to structure a page</h2>
        <p>And this <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://tailwindui.com/components/application-ui/data-display/description-lists"
                target="_blank">TailwindUI
                Description
                List</a> below is being imported from <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://danohara.notion.site/c6c589d90bcd4b81a8091b8d0ce377c2?v=67a93d26cdd046d3b32ea12d7e78b8d1"
                target="_blank">this
                Notion database</a> via the same import.
        </p>
        <DescriptionListExample />
    </div>
</template>

<script>
import DropdownExample from "@/components/dropdownExample.vue";
import DescriptionListExample from "../components/descriptionListExample.vue";

export default {
    components: {
        DropdownExample,
        DescriptionListExample
    }

};
</script>

<style>
</style>
