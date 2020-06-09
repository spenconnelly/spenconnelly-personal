import { useState, useEffect } from 'react'

import endpoints from './endpoints'

export { default as endpoints } from './endpoints'

export const useGithubRepos = () => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        (async function fetchRepos() {
            try {
                const response = await fetch(endpoints.repos)
                const result = await response.json()
                setLoading(false)
                setRepos(result)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        })()
    }, [])

    return [repos, isLoading, error]
}
