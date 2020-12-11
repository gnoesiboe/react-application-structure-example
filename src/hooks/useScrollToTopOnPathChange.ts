import useScrollToTopOnDependencyChange from '@freshheads/javascript-essentials/build/react/hooks/useScrollToTopOnDependencyChange';
import { useLocation } from 'react-router';

export default function useScrollToTopOnPathChange() {
    const location = useLocation();

    useScrollToTopOnDependencyChange(location.pathname);
}
