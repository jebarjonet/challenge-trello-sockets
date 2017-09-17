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
            name: `Applicant ${id}`,
        }
    })
}