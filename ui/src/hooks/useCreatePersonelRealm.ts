import { nanoid, useMutation, useQueryClient } from "@tuval/forms";
import { CelminoServices } from "../services";

export const useCreatePersonelRealm = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ realmId = nanoid() , name, organizationId }: { realmId: string, name: string, organizationId: string }) => {
          
            return CelminoServices.Realm.createPersonelRealm(realmId, name, organizationId);
        },

        onSuccess: (data: any) => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['realms'] });
        }
    })

    const createPersonelRealm = (
        { realmId, name, organizationId }: {
            /**
             * The name of the account.
             */
            realmId?: string
            name: string,
            organizationId: string

        },
        onSuccess: (data: any) => void = void 0
    ) => {
        mutation.mutate({ realmId, name, organizationId },
            {
                onSuccess: (data) => {
                    onSuccess(data);
                }
            });
    }
    return {
        createPersonelRealm,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error as { message: string }
    }
}