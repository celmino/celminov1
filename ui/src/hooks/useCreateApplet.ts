import { nanoid, useMutation, useQueryClient } from "@tuval/forms";
import { CelminoServices } from "../services";
import { AppletServiceBroker } from "../brokers/AppletServiceBroker";

export const useCreateApplet = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ realmId, schema }: { realmId: string, schema: any }) => {

            return AppletServiceBroker.Default
                .setRealmId(realmId)
                //.setAppletId(applet.$id)
                .createApplet(schema);
        },

        onSuccess: (data: any) => {
            // Invalidate and refetch
            queryClient.invalidateQueries();
        }
    })

    const createApplet = (
        { realmId, schema }: {
            /**
             * The name of the account.
             */
            realmId: string
            schema: any

        },
        onSuccess: (data: any) => void = void 0
    ) => {
        mutation.mutate({ realmId, schema },
            {
                onSuccess: (data) => {
                    onSuccess(data);
                }
            });
    }
    return {
        createApplet,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error as { message: string }
    }
}