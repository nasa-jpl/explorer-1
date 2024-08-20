import type { GradeLevelsObject } from './../interfaces'
import { computed, ref } from 'vue'

const gradesAsNumbers = ref({
  K: 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12
})

const numbersAsGrades = computed(
  (): {
    [name: number]: string
  } => {
    return Object.keys(gradesAsNumbers.value).reduce((ret, key) => {
      // @ts-expect-error need to correctly retype keys when swapping
      ret[gradesAsNumbers.value[key]] = key
      return ret
    }, {})
  }
)

const rangeify = (a: number[]): string[] => {
  const res: string[] = []
  let run = []
  for (let i = 0; i < a.length; i++) {
    run.push(a[i])
    if (i + 1 >= a.length || a[i + 1] - a[i] > 1) {
      res.push(
        // @ts-expect-error
        run.length > 1
          ? `${numbersAsGrades.value[run[0]]}-${run.pop()}`
          : run.map((item) => numbersAsGrades.value[item])
      )
      run = []
    }
  }
  return res
}

export const rangeifyGrades = (gradeLevels: GradeLevelsObject[]) => {
  if (gradeLevels) {
    const allAgesArray = gradeLevels.map((item) => {
      if (item.gradeLevel === 'All Ages') return item.gradeLevel
    })
    const allAges = allAgesArray.join('')

    const gradesArray = gradeLevels.map((item) => {
      // @ts-expect-error
      const level: number = gradesAsNumbers.value[item.gradeLevel]
      return level
    })

    const filteredGrades = rangeify(gradesArray.filter(Number.isFinite))
    let preparedGrades: string = ''
    if (filteredGrades?.length) {
      const gradeString = filteredGrades.length > 0 ? 'Grades: ' : 'Grade: '
      preparedGrades = filteredGrades
        .map((grade, index) => (index === 0 ? gradeString + grade : grade))
        .join(', ')
    }

    const audienceArray = [allAges, preparedGrades]
    return audienceArray.filter(Boolean).join(', ')
  }
  return undefined
}
