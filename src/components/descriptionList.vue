<!-- 
Example description list from TailwindUI
https://tailwindui.com/components/application-ui/data-display/description-lists 
-->
<template>
    <div v-for="applicant in data">
        <Disclosure v-slot="open">
            <div class="w-full bg-white shadow sm:rounded-lg">
                <DisclosureButton
                    class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 rounded-lg hover:bg-slate-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">{{ applicant.fullName }}</h3>
                        <p class="text-sm text-gray-400">Application ID: {{ applicant.id }}</p>

                    </div>

                </DisclosureButton>
                <transition enter-active-class="transition duration-200 ease-out"
                    enter-from-class="transform -translate-y-4 opacity-0" enter-to-class="transform opacity-100"
                    leave-active-class="transition duration-150 ease-out" leave-from-class="transform opacity-100"
                    leave-to-class="transform -translate-y-4 opacity-0">
                    <DisclosurePanel class="border-t border-gray-200">
                        <dl>
                            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Application for</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{
                                        applicant.applicationFor
                                }}
                                </dd>
                            </div>
                            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Email address</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{
                                        applicant.emailAddress
                                }}
                                </dd>
                            </div>
                            <div class="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${{
                                        applicant.salaryExpectation
                                }}
                                </dd>
                            </div>
                            <div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">About</dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ applicant.about }}</dd>
                            </div>
                        </dl>
                    </DisclosurePanel>
                </Transition>
            </div>
        </Disclosure>
    </div>
</template>

<script >
import { PaperClipIcon } from '@heroicons/vue/solid'
import dataList from "@/data/dataList.json"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
    components: {
        PaperClipIcon,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronRightIcon
    },
    data() {
        return {
            data: dataList,
        }
    },
}
</script>
