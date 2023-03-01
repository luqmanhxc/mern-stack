import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatchWorkout } = useWorkoutsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });

        // set workouts to null
        dispatchWorkout({ type: 'SET_WORKOUT', payload: null });
    };

    return { logout };
};
