import { Router } from 'express'

import type { Request, Response } from 'express'

interface RequestProps<T> extends Request<{}, {}, T> { }

type SignInProps = {
    username: string
    password: string
}

type SignOutProps = {
    id: string
}

const AuthRoute = Router()

AuthRoute.post(
    '/sign-in',
    function(request: RequestProps<SignInProps>, response: Response) {
        response.send(request.body)
    }
)

AuthRoute.post(
    '/sign-out',
    function(request: RequestProps<SignOutProps>, response: Response) {
        response.send(request.body)
    }
)

export { AuthRoute }
