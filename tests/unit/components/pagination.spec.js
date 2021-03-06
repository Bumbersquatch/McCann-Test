import { shallowMount} from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'

const model = {
  links: {
    next: {_page: "3", _limit: "5", rel: "next", url: "http://jsonplaceholder.typicode.com/posts?_page=3&_limit=5"},
    prev: {_page: "1", _limit: "5", rel: "prev", url: "http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"},
    first: {_page: "1", _limit: "5", rel: "first", url: "http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"},
    last: {_page: "20", _limit: "5", rel: "last", url: "http://jsonplaceholder.typicode.com/posts?_page=20&_limit=5"}
  },
  page: 2,
  total: 20
}

describe('Pagination.vue', () => {

  it('render pagination', () => {
    const wrapper = shallowMount(Pagination, {
      props: model
    })
    expect(wrapper.find('.page-num').text()).toEqual(`${model.page} / ${model.total}`)
  })

  it('calls next pagination link with correct rel and emits correct url', () => {
    const wrapper = shallowMount(Pagination, {
      props: model
    })
    wrapper.vm.paginationLink(model.links.next.rel)
    expect(wrapper.emitted().postsFetch[0][0].url).toEqual(model.links.next.url)
  })

  it('calls prev pagination link with correct rel and emits correct url', () => {
    const wrapper = shallowMount(Pagination, {
      props: model
    })
    wrapper.vm.paginationLink(model.links.prev.rel)
    expect(wrapper.emitted().postsFetch[0][0].url).toEqual(model.links.prev.url)
  })

  it('calls first pagination link with correct rel and emits correct url', () => {
    const wrapper = shallowMount(Pagination, {
      props: model
    })
    wrapper.vm.paginationLink(model.links.first.rel)
    expect(wrapper.emitted().postsFetch[0][0].url).toEqual(model.links.first.url)
  })
  
  it('calls last pagination link with correct rel and emits correct url', () => {
    const wrapper = shallowMount(Pagination, {
      props: model
    })
    wrapper.vm.paginationLink(model.links.last.rel)
    expect(wrapper.emitted().postsFetch[0][0].url).toEqual(model.links.last.url)
  })
})
