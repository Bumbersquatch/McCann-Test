import { shallowMount } from '@vue/test-utils'
import PostItem from '@/components/PostItem.vue'

describe('PostItem.vue', () => {
  const model = {
    post: {
      title: 'This is a test Title',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      userId: 1
    },
    authors: [{
      id: 1,
      name: 'Joe Bloggs'
    }],
  }

  it('renders a post item with a title, body', () => {
    const wrapper = shallowMount(PostItem, {
      props: model
    })
    expect(wrapper.find('.card-title').text()).toContain(model.post.title)
    expect(wrapper.find('.card-text').text()).toContain(model.post.body)
  })

  it('renders the author name computed property', () => {
    const wrapper = shallowMount(PostItem, {
      props: model
    })
    expect(wrapper.find('.card-subtitle').text()).toContain(model.authors[0].name)
  })
})
