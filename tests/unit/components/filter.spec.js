import { shallowMount } from '@vue/test-utils'
import Filter from '@/components/Filter.vue'

describe('Filter.vue', () => {
  const model = {
    authors: [{
      id: 1,
      name: 'Joe Bloggs'
    }],
    numPosts: 5
  }

  it('renders authors select', () => {
    const wrapper = shallowMount(Filter, {
      props: model
    })
    expect(wrapper.find('#filter').findAll('option')[0].text()).toContain('Select Author')
    expect(wrapper.find('#filter').findAll('option')[1].text()).toContain('All')
    expect(wrapper.find('#filter').findAll('option')[2].text()).toContain(model.authors[0].name)
  })

  it('calls authorFilterChange on change event and fires event', () => {
    const wrapper = shallowMount(Filter, {
      props: model
    })
    const spy = jest.spyOn(wrapper.vm, 'authorFilterChange')
    wrapper.find('#filter').findAll('option')[2].trigger('change')
    expect(spy).toHaveBeenCalled()
    expect(wrapper.emitted().postsFetch[0]).toEqual([`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${model.numPosts}&userId=${model.authors[0].id}`])
  })

  it('calls authorFilterChange on select all and fires event', () => {
    const wrapper = shallowMount(Filter, {
      props: model
    })
    const spy = jest.spyOn(wrapper.vm, 'authorFilterChange')
    wrapper.find('#filter').findAll('option')[0].trigger('change')
    expect(spy).toHaveBeenCalled()
    expect(wrapper.emitted().postsFetch[0]).toEqual([`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${model.numPosts}`])
  })
})
