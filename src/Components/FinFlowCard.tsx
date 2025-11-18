import React, { type ReactNode } from "react";

interface FinflowCardProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    footer?: ReactNode;
}

export default function FinflowCard({
    title,
    subtitle,
    children,
    footer,
}: FinflowCardProps) {
    return (
        <div className="finflow-card">
            <div className="finflow-card-header">
                <h3 className="finflow-card-title">{title}</h3>
                {subtitle && (
                    <p className="finflow-card-subtitle">{subtitle}</p>
                )}
            </div>

            <div className="finflow-card-content">{children}</div>

            {footer && <div className="finflow-card-footer">{footer}</div>}
        </div>
    );
}
