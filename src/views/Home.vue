<template>
    <div class="container flex flex-col gap-10 px-10 mx-auto">
        <p>This list within the below <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://tailwindui.com/components/application-ui/elements/dropdowns">TailwindUI Dropdown</a> is
            being imported from <a
                class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                href="https://danohara.notion.site/9d30f1bf98004106856e741e2139a81d?v=c7c45e6a745848e29ff76e8a90a81228">this
                Notion database</a> via the <i class="px-2 py-1 rounded-md text-rose-600 bg-slate-100">npm run
                notion</i> script.
        </p>
        <DropdownExample class="w-fit" />
    </div>
</template>

<script>
import notionData from "@/data/data.json"
import DropdownExample from "@/components/dropdownExample.vue";

export default {
    data() {
        return {
            data: notionData,
            showPeople: false,
        }
    },
    components: {
        DropdownExample
    }

};
</script>

<style>
</style>
