// src/contexts/MyContext.tsx
import { createContext, useReducer, ReactNode, Dispatch } from 'react';

interface State {
    count: number;
}

type Action =
    | { type: 'somar' }
    | { type: 'subtrair' };

interface MyContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

const inicialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'somar':
            return { count: state.count + 1 };
        case 'subtrair':
            return { count: state.count - 1 };
        default:
            throw new Error('Ação desconhecida');
    }
}

const defaultValue: MyContextProps = {
    state: inicialState,
    dispatch: () => {},
};

export const MyContext = createContext<MyContextProps>(defaultValue);

interface MyContextProviderProps {
    children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
    const [state, dispatch] = useReducer(reducer, inicialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
}
