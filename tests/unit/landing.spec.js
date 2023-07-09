import { mount } from "@vue/test-utils"
import Landing from "@/Pages/Landing.vue";

describe("Landing.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Landing, {
            props: {
                msg: "Worked"
            },
        });
        expect(wrapper.text()).toContain("Worked")
    });
});