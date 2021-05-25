import { shallowMount} from '@vue/test-utils'
import LoadingButton from '@/components/LoadingButton.vue'

const model = {
  click: jest.fn(),
  loading: false,
  params: "next"
}

describe('LoadingButton.vue', () => {

  it('render enabled button', () => {
    const wrapper = shallowMount(LoadingButton, {
        props: model
      })
      expect(wrapper.find('.enabled-btn').exists()).toBe(true)
  })

  it('render loading button', () => {
    const wrapper = shallowMount(LoadingButton, {
        props: {
            click: jest.fn(),
            loading: true,
            params: "next"
          }
      })
      expect(wrapper.find('.disabled').exists()).toBe(true)
  })

  it('calls loading button link with correct rel and emits correct url', () => {
    const wrapper = shallowMount(LoadingButton, {
      props: model
    })
    
    wrapper.find('.enabled-btn').trigger('click')
    expect(model.click).toHaveBeenCalled()
    expect(model.click).toHaveBeenCalledWith(model.params)
  })

})
