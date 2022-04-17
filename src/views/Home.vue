<template>
    <div class="container flex flex-col gap-10 px-10 mx-auto">
        <a class="block px-8 py-4 text-lg underline transition-all rounded-lg cursor-pointer w-fit bg-slate-100 hover:bg-slate-200 hover:no-underline"
            @click="showPeople = !showPeople">Toggle people list</a>
        <ul v-if="showPeople">
            <p>This list is being imported from <a
                    class="text-blue-800 underline transition-all hover:underline-offset-2 hover:decoration-2 hover:text-black"
                    href="https://www.notion.so/danohara/9d30f1bf98004106856e741e2139a81d?v=c7c45e6a745848e29ff76e8a90a81228">this
                    Notion database</a> via the <i class="px-2 py-1 rounded-md text-rose-600 bg-slate-100">npm run
                    notion</i> script.
            </p>
            <li class="my-10" v-for="person in data">
                <h5 class="text-4xl">{{ person.name }}</h5><br>
                <p class="-mt-5">{{ person.age }} years old.</p>
            </li>
        </ul>
    </div>
</template>

<script>
import notionData from "@/data/data.json"

export default {
    data() {
        return {
            data: notionData,
            showPeople: false,
        }
    },
};
</script>

<style>
</style>
