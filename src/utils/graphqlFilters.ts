import { FilterTypes } from '@/types/FilterTypes'
import { PriorityTypes } from '@/types/PriorityTypes'

export function getCategoryByType(type: FilterTypes) {
  if (type === FilterTypes.MUG) return 'mugs'
  if (type === FilterTypes.SHIRT) return 't-shirts'
  return 'ALL'
}

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: 'created_at', order: 'ASC' }
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'DSC' }
  if (priority === PriorityTypes.MINOR_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }

  return { field: 'sales', order: 'DSC' }
}

export const mountQuery = (type: FilterTypes, priority: PriorityTypes) => {
  const sortSettings = getFieldByPriority(priority)
  if (type === FilterTypes.ALL)
    return `query {
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
      id
      name
      price_in_cents
      image_url
    }
  }
`

  const categoryFilter = getCategoryByType(type)

  return `
  query {
      allProducts(sortField: "${sortSettings.field}", sortOrder: "${
    sortSettings.order
  }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ''}) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `
}
