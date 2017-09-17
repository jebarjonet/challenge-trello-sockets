import _ from 'lodash'

const names = [
    'Trina Blackburn',
    'Merilyn Pough',
    'Rochell Goldner',
    'Danica Joe',
    'Luella Dunning',
    'Sylvie Shalash',
    'Dominque Willmore',
    'Rubin Doughty',
]
const titles = [
    'Future Intranet Manager',
    'Customer Group Agent',
    'Forward Accounts Designer',
    'Infrastructure Administrator',
    'Accountability Specialist',
    'Principal Security Developer',
    'Central Group Analyst',
    'Customer Data Architect',
]
let idCount = 0

/**
 * Generate array of applicants
 * @param length
 * @returns {Array}
 */
export const getApplicants = (length) => {
    return Array(length).fill({}).map(() => {
        const id = idCount++
        return {
            id: `applicant-${id}`,
            name: names[id],
            title: titles[id],
            createdAt: '2 days ago',
            grade: _.random(0, 10, true).toFixed(1),
            like: _.random(0, 15),
            comments: _.random(0, 10),
            messages: _.random(0, 10),
        }
    })
}