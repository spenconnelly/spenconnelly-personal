import { useState, useEffect } from 'react'

import endpoints from './endpoints'

export { default as endpoints } from './endpoints'

export const useGithubRepos = () => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(endpoints.repos)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false)
                    setRepos(result)
                },
                (error) => {
                    setLoading(false)
                    setError(error)
                }
            )
    }, [])

    return [repos, isLoading, error]
}
