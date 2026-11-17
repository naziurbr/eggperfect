export const cookingMethods = [
  {
    id: 'soft',
    label: 'Soft',
    description: 'Dippy, golden centre',
    baseSeconds: 360,
    instructions: [
      { title: 'Get the water bubbling', body: 'Bring a saucepan of water to a gentle boil. Make sure there’s room for {count} eggs.' },
      { title: 'Lower in your eggs', body: 'Gently lower your cold {size} eggs into the water with a spoon, then start the timer.' },
      { title: 'Cool, crack & dip', body: 'Move eggs to cold water for a minute, then serve with buttery toast soldiers.' },
    ],
  },
  {
    id: 'jammy',
    label: 'Jammy',
    description: 'Soft, custardy middle',
    baseSeconds: 450,
    instructions: [
      { title: 'Get the water bubbling', body: 'Bring a saucepan of water to a gentle boil. Make sure there’s room for {count} eggs.' },
      { title: 'Lower in your eggs', body: 'Gently lower your cold {size} eggs into the water with a spoon, then start the timer.' },
      { title: 'Cool, peel & enjoy', body: 'Transfer eggs to an ice bath for a few minutes. Peel gently and slice over something delicious.' },
    ],
  },
  {
    id: 'hard',
    label: 'Hard',
    description: 'Lovely and fully set',
    baseSeconds: 660,
    instructions: [
      { title: 'Get the water bubbling', body: 'Bring a saucepan of water to a gentle boil. Make sure there’s room for {count} eggs.' },
      { title: 'Lower in your eggs', body: 'Gently lower your cold {size} eggs into the water with a spoon, then start the timer.' },
      { title: 'Cool, peel & enjoy', body: 'Cool eggs in an ice bath until no longer warm. Peel for snacks, salads or a little egg mayo.' },
    ],
  },
]

export const eggSizes = [
  { id: 'small', label: 'Small', adjustmentSeconds: -30 },
  { id: 'medium', label: 'Medium', adjustmentSeconds: 0 },
  { id: 'large', label: 'Large', adjustmentSeconds: 45 },
]

export function getCookingTime(methodId, sizeId) {
  const method = cookingMethods.find((item) => item.id === methodId) ?? cookingMethods[1]
  const size = eggSizes.find((item) => item.id === sizeId) ?? eggSizes[1]
  return method.baseSeconds + size.adjustmentSeconds
}
