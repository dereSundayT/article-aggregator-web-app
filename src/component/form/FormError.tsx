
export const FormError = ({ error }: { error: string }) => {
    return (
        <div className="text-red-500 text-sm">
            {error}
        </div>
    )
}