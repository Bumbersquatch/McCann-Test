import { shallowMount } from '@vue/test-utils'
import PostComments from '@/components/PostComments.vue'

describe('PostComments.vue', () => {
  const model = {
    postId: 1,
  }

  it('render comments button', () => {
    const wrapper = shallowMount(PostComments, {
      props: model
    })
    expect(wrapper.find('.card-link').exists()).toBe(true)
  })

  it('render comments on show comments true', async () => {
    const data = {
        comments: [{
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }],
        buttonText: 'Hide Comments',
        showComments: true
    }
    const wrapper = shallowMount(PostComments, {
      props: model
    })
    await wrapper.setData(data)
    expect(wrapper.find('.card-link').exists()).toBe(true)
    expect(wrapper.findAll('.comment')[0].find('.name').text()).toContain(data.comments[0].email)
  })
})
