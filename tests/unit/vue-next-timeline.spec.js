import { mount } from '@vue/test-utils'
import VueNextTimeline from '../../src/components/VueNextTimeline'

describe('When I create the VueNextTimeline component', () => {
  const item1 = {
    title: '2013',
    content: 'The international year of mathematics on planet Earth. The international year of mathematics on planet Earth',
    color: '#2785ab'
  }
  const item2 = {
    title: '2014',
    content: 'International Year of Family Farming',
    color: '#f89714'
  }
  const item3 = {
    title: '2015',
    content: 'International Year of Light and Light-Based Technologies',
    color: '#f65b78'
  }
  const items = [item1, item2, item3]

  const createTimeline = (props = {}) => {
    return mount(VueNextTimeline, { props })
  }

  it('Any item should emit a click event when clicked (clicked on title or content)', () => {
    const component = createTimeline({ items })

    const content = component.find('.vue-next-timeline > table .vue-next-timeline__item.even .vue-next-timeline__item--content > span')
    content.trigger('click')
    content.trigger('click')

    expect(component.emitted('click')).toBeTruthy()
    expect(component.emitted('click').length).toBe(2)
  })
})
