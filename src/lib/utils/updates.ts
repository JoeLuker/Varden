import { updateQueue } from "$lib/utils/updateQueue.svelte";

export interface UpdateState {
    status: 'idle' | 'syncing' | 'error';
    error: Error | null;
}

// Instead of a function that creates state, we'll let components manage their own state
export async function executeUpdate<T>({ 
    key,
    status,
    operation,
    optimisticUpdate,
    rollback 
}: {
    key: string;
    status: UpdateState;
    operation: () => Promise<T>;
    optimisticUpdate: () => void;
    rollback: () => void;
}) {
    try {
        await updateQueue.enqueue({
            key,
            execute: async () => {
                status.status = 'syncing';
                await operation();
                status.status = 'idle';
            },
            optimisticUpdate,
            rollback: () => {
                rollback();
                status.error = new Error('Failed to update');
                status.status = 'error';
            }
        });
        
        status.error = null;
    } catch (e) {
        // Error handling is done in rollback
    }
} 